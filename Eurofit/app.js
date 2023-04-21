const {app, port} = require('./server');
const path = require('./routes');
const cors = require('cors');

app.use(cors());
path.abonnementPath(app);
path.membrePath(app);
path.clubPath(app);

app.listen(port, () => {
    console.log(`🎉 Server is running on port ${port} 🎉`);
})