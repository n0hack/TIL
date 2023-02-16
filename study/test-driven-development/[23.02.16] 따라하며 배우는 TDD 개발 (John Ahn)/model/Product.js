const mongoose = require('mongoose');

// 스키마 정의 (문서의 구조나 유효성에 대한 정보를 담고 있음)
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

// 모델 생성 (모델명, 스키마)
module.exports = mongoose.model('Product', productSchema);
