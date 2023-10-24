module.exports = {
    port: 3002,
    database: {
        host: 'bookingdb-c',
        user: 'nitish',
        password: 'bookingmysqldb',
        database: 'booking_db',
    },
	endpoints: {
		user_microservice: "http://userms-c:3001"
	}
};