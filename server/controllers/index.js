const CustomerModel = require("../models/Customers");

exports.getCustomers = async function (req, res) {
  try {
    const customers = await CustomerModel.findAll();
    res.status(200).json({ customers });
  } catch (error) {
    res.send(error);
    console.log(`error`, error)
  }
};

exports.add_customer = async (req, res) => {
  try {
    const newCustomer = await CustomerModel.create({
      customernumber: req.body.customernumber,
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      birth: req.body.birth,
      password: req.body.password,
    });
    res.append('Content-Type', 'application/javascript; charset=UTF-8').status(200).json({ newCustomer }).send('Added successfully')
  } catch (error) {
    res.send(error)
    console.log(`error`, error);
  }
};

exports.delete_customer = async (req, res) => {
  try {
    await CustomerModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("deleted successfully");
  } catch (error) {
    res.send(error)
    console.log(`error`, error);
  }
};

exports.edit_customer = async (req, res) => {
  try {
    const updatedCustomer = await CustomerModel.update(
      {
        customernumber: req.body.customernumber,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        birth: req.body.birth,
        password: req.body.password,
      },
      { returning: true, where: { id: req.params.id } }
    );
    res.append('Content-Type', 'application/javascript; charset=UTF-8').status(200).json({ updatedCustomer }).send('Updated successfully')
  } catch (error) {
    res.send(error)
    console.log(`error`, error);
  }
};
