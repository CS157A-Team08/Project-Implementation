module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
        employeeID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        phone: type.INTEGER,
        phone:type.INTEGER,
        position: type.STRING,
        password: type.STRING,
    })
}