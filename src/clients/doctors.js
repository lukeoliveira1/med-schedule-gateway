const Client = require("./ClientMaker");

const client = new Client(
  "../proto/Patients.proto",
  "gateway.doctors.DoctorsController",
  "127.0.0.1:50051",
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: false,
    arrays: false,
    objects: false,
    oneofs: false,
  }
);

module.exports = client;
