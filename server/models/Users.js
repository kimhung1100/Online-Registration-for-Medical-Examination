module.exports = (sequelize, DataType) => {
    const Tickets = sequelize.define('tickets', {
        ticketid: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    });
    return Users;
};
