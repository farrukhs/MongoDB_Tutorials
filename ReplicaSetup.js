var cfg = { _id: 'demo',
    members: [
        { _id: 0, host: '127.0.0.1:3000', priority: 100},
        { _id: 1, host: '127.0.0.1:4000', priority: 50},
		{ _id: 2, host: '127.0.0.1:5000', priority: 0},
        { _id: 3, host: '127.0.0.1:6000', arbiterOnly: true}
    ]
};

var error = rs.initiate(cfg);
printjson(error);