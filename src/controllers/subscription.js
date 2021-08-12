const { query } = require("../services/db");
const isEmpty = require("../helpers/isEmpty");

const getCustomerInfo = async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const result = await query(
      `select * from subscription where phoneNumber = ${phoneNumber}`
    );

    if (isEmpty(result)) {
      res
        .status(403)
        .json({ message: "Belirtilen telefona ait kayıt bulunamamıştır." });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası. Lütfen tekrar deneyin." });
  }
};

const getSubscriptionOrders = async (req, res) => {
  const { subscriptionId } = req.params;

  try {
    const result = await query(
      `SELECT orderId, subscriptionId, deliveryDate, products, totalAmount,
      case paymentMethod 
      when 'BKM' then 'BKM' when 'PAYATDOOR' then 'Kapıda' when 'MASTERPASS' then 'Kredi Kartlı' when 'HOPI' then 'Hopi' end paymentMethod,
      case status
      when 'NEW' then 'Yeni' when 'CONFIRMED' then 'İletildi' when 'COMPLETED' then 'Teslim edildi' when 'CANCELED' then 'İptal' 
      end status
      FROM bisu.orders where subscriptionId = '${subscriptionId}';`
    );

    if (isEmpty(result)) {
      res
        .status(403)
        .json({ message: "Belirtilen telefona ait kayıt bulunamamıştır." });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası. Lütfen tekrar deneyin." });
  }
};

module.exports = {
  getCustomerInfo,
  getSubscriptionOrders,
};
