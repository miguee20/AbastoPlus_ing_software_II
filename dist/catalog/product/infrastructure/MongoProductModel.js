import mongoose from "mongoose";
const presentationSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    netQuantity: { type: Number, required: true },
    unitOfMeasure: { type: String, required: true }
}, { _id: false });
const productSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    baseUnit: { type: String, required: true },
    presentations: [presentationSchema]
}, {
    versionKey: false,
    timestamps: true
});
export const ProductModel = mongoose.model("Product", productSchema);
//# sourceMappingURL=MongoProductModel.js.map