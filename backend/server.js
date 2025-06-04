import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';

// Initialize Firebase Admin with default credentials
admin.initializeApp();
const db = admin.firestore();
const ordersCollection = db.collection('orders');

const app = express();
app.use(cors());
app.use(express.json());

// Get all orders
app.get('/api/orders', async (req, res) => {
  try {
    const snapshot = await ordersCollection.get();
    const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving orders' });
  }
});

// Get a single order by id
app.get('/api/orders/:id', async (req, res) => {
  try {
    const doc = await ordersCollection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ error: 'Order not found' });
    res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving order' });
  }
});

// Create a new order
app.post('/api/orders', async (req, res) => {
  const { id, statusIndex = 0 } = req.body;
  if (!id) return res.status(400).json({ error: 'id is required' });
  try {
    await ordersCollection.doc(id).set({ statusIndex }, { merge: true });
    res.status(201).json({ id, statusIndex });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating order' });
  }
});

// Update an order status
app.put('/api/orders/:id', async (req, res) => {
  const { statusIndex } = req.body;
  try {
    const docRef = ordersCollection.doc(req.params.id);
    await docRef.set({ statusIndex }, { merge: true });
    const updated = await docRef.get();
    res.json({ id: updated.id, ...updated.data() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating order' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
