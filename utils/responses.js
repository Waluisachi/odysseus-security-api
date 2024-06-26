class ResponseService {
  static success({ res, status = 200, data, message }) {
    return res.status(status).json({
      message,
      data,
      success: true,
    });
  }

  static error({ res, status, message }) {
    return res.status(status).json({ message });
  }

  static serverError({ res }) {
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = ResponseService;
