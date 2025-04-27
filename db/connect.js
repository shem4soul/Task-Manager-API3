const mongoose = require("mongoose")

require("dotenv").config()

const dbConnect = asyncHandler(async () => {
  await mongoose.connect(process.env.MONGODB_URL)
  console.info(`✅ MongoDB connected on ${process.env.NODE_ENV} database`)
})

module.exports = dbConnect

