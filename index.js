const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Սերվերը միացավ ${PORT} պորտի վրա`);
});

// Միացնում ենք CORS-ը, որ ֆրոնտենդը կարողանա կպնել բեքենդին
app.use(cors());
app.use(express.json());

// Սա քո առաջին "Route"-ն է (API հասցեն)
app.get('/', (req, res) => {
    res.send('URU Backend-ը ողջունում է քեզ!');
});

// Այստեղ կլինի տեսարժան վայրերի ցանկը (առայժմ պարզ զանգված)
app.get('/api/sights', (req, res) => {
    const sights = [
        { id: 1, name: "Գառնի", location: "Կոտայք", type: "Տաճար" },
        { id: 2, name: "Տաթև", location: "Սյունիք", type: "Վանական համալիր" }
    ];
    res.json(sights);
});

app.listen(PORT, () => {
    console.log(`Սերվերը միացավ: http://localhost:${PORT}`);
});