module.exports = (sequelize, DataType) => {
    const Tickets = sequelize.define('tickets', {
        ticketid: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        room: {
            type: DataType.STRING,
            allowNull: false,
        },
        day: {
            type: DataType.STRING,
            allowNull: false,
        },
        hour: {
            type: DataType.STRING,
            allowNull: false,
        },

        faculty: {
            type: DataType.STRING,
            allowNull: false,
        },
        doctorID: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        patientID: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataType.STRING,
            allowNull: false,
        },
    });
    return Tickets;
};
