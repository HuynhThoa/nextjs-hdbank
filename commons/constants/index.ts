import { ERROR_CODE } from "commons/helpers/error";

export const ENABLE_WRITE_LOG = process.env.ENABLE_WRITE_LOG;
export const API_DOMAIN = process.env.API_DOMAIN;
export const API_DOMAIN_RATING = process.env.API_DOMAIN_RATING;
export const COOKIE_NAME = process.env.COOKIE_NAME;
export const COOKIE_PASS = process.env.COOKIE_PASS;
export const CHANNEL = process.env.NEXT_PUBLIC_CHANNEL;
export const SECRET_KEY_ACCESS_TOKEN = process.env.SECRET_KEY_ACCESS_TOKEN;
export const SECRET_KEY_ACCESS_TOKEN_VNP =
  process.env.SECRET_KEY_ACCESS_TOKEN_VNP;

export const SERVICE_CODE = process.env.NEXT_PUBLIC_SERVICE_CODE;
export const IS_REQ_CHAL_CODE = process.env.NEXT_PUBLIC_IS_REQ_CHAL_CODE;
export const MERCHANT = process.env.NEXT_PUBLIC_MERCHANT;
export const ACCTTYPE = process.env.NEXT_PUBLIC_ACCTTYPE;
export const SERVICETYPE = process.env.NEXT_PUBLIC_SERVICETYPE;
export const PROJECT_NAME = {
  vnp: "vnp",
};

export const PARTNER = {
  GC: "goicuoc",
  BH: "baohiem",
};

export const LANGUAGE = {
  VI: "vn",
  EN: "en",
};

export const ACTIVE_BILL = {
  day1: "1",
  day3: "3",
  day7: "7",
};

export const ERROR_MESSAGE_TIMEOUT =
  "Kết nối bị gián đoạn, quý khách vui lòng thử lại sau";
export const ERROR_MESSAGE_GET_PHONE =
  "Quý khách chưa đăng ký dịch vụ OTP SMS để thực hiện giao dịch, quý khách vui lòng đến điểm giao dịch gần nhất để đăng ký dịch vụ!";
export const ERROR_MESSAGE_TERM =
  "Quý khách vui lòng đồng ý điều khoản và điều kiện để thực hiện giao dịch!";
export const ERROR_MESSAGE_CHECK_BILL =
  "Quý khách vui lòng chọn nội dung cần thanh toán để thực hiện giao dịch!";
export const ERROR_MESSAGE_TOTAL_BILL = "Quý khách vui lòng kiểm tra lại Số tiền để tiếp tục";
export const ERROR_MESSAGE_AUTHO = "Xác thực người dùng không thành công!";

export const ERROR_CODE_LIMIT_MESSAGE = {
  limit: "20022",
};

export const ERROR_CODE_WITH_MESSAGE_INQUIRY = {
  [LANGUAGE.VI]: {
    "00000": "Thành công",
    "00042": "Mã hợp đồng không chính xác",
    "00043": "Mã hợp đồng không chính xác",
    "10017a": "Quý khách vui lòng kiểm tra lại Biển số để tiếp tục",
    "10017b": "Quý khách vui lòng kiểm tra lại Mã hợp đồng để tiếp tục",
    "99212": "Tài khoản của Quý khách không đủ số dư để thực hiện giao dịch này. Vui lòng kiểm tra lại",
    "99044": "Vui lòng chọn nhà cung cấp",
    "99045": "Vui lòng nhập Mã hợp đồng",
    "096": "Mã hợp đồng không được nhập ký tự đặc biệt",
    "00210": "Khách hàng chưa có hóa đơn cần thanh toán",
    "00006":
      "Ngân hàng điện tử đang bận, vui lòng thử lại sau. Hoặc liên hệ hotline HDBank 19006060.",
    "40103": "Không hỗ trợ cho tài khoản lương, vui lòng liên hệ: 19006060",
    "00306": "Vui lòng chọn loại biển số xe",
    "00310": "Vui lòng nhập biển số xe",
    "00307": "Vui lòng nhập mã khách hợp đồng",
    "00308": "Vui lòng chọn nhà cung cấp",
    "00311": "Vui lòng nhập số tiền cần nạp",
    "00309":
      "Không có tài khoản hợp lệ để thanh toán, vui lòng liên hệ: 19006060",
  },
  [LANGUAGE.EN]: {
    "00000": "Thành công",
    "00042": "Mã hợp đồng không chính xác",
    "00043": "Mã hợp đồng không chính xác",
    "10017a": "Quý khách vui lòng kiểm tra lại biển số để tiếp tục",
    "10017b": "Quý khách vui lòng kiểm tra lại mã hợp đồng để tiếp tục",
    "99212": "Tài khoản của Quý khách không đủ số dư để thực hiện giao dịch này. Vui lòng kiểm tra lại",
    "99044": "Vui lòng chọn nhà cung cấp",
    "99045": "Vui lòng nhập Mã hợp đồng",
    "096": "Mã hợp đồng không được nhập ký tự đặc biệt",
    "00210": "Khách hàng chưa có hóa đơn cần thanh toán",
    "00006":
      "Ngân hàng điện tử đang bận, vui lòng thử lại sau.<br>Hoặc liên hệ hotline HDBank 19006060.",
    "40103": "Không hỗ trợ cho tài khoản lương, vui lòng liên hệ: 19006060",
    "00306": "Vui lòng chọn loại biển số xe",
    "00310": "Vui lòng nhập biển số xe",
    "00307": "Vui lòng nhập mã khách hợp đồng",
    "00308": "Vui lòng chọn nhà cung cấp",
    "00311": "Vui lòng nhập số tiền cần nạp",
    "00309":
      "Không có tài khoản hợp lệ để thanh toán, vui lòng liên hệ: 19006060",
  },
};

export const ERROR_CODE_WITH_MESSAGE = {
  [LANGUAGE.VI]: {
    "00000": "Thành công",
    "00015": "Thanh toán không thành công, vui lòng liên hệ: 19006060",
    "00006":
      "Giao dịch đã được ghi nhận và đang được xử lý, vui lòng không thực hiện thanh toán lại. Liên hệ HDBank: 19006060 để biết thêm chi tiết.",
    "50001": "Số điện thoại đã bị khóa, vui lòng liên hệ: 19006060",
    "50009": "Tài khoản không hợp lệ để thanh toán, vui lòng liên hệ: 19006060",
    "10008": "Mã OTP không chính xác",
    "10021": "Mã OTP hết hạn",
    "99212": "Tài khoản của Quý khách không đủ số dư để thực hiện giao dịch này. Vui lòng kiểm tra lại",
    "00049":
      "Không tìm thấy giao dịch gạch nợ tương ứng, vui lòng liên hệ: 19006060",
    "40051": "Tài khoản của Quý khách không đủ số dư để thực hiện giao dịch này. Vui lòng kiểm tra lại",
    "40103": "tài khoản chuyển khoản không hợp lệ, vui lòng liên hệ: 19006060",
    "20022": "Vượt hạn mức giao dịch",
    "600002":
      "Số tiền giao dịch vượt quá hạn mức cho mỗi lần giao dịch. Hạn mức cho mỗi lần giao dịch",
    "600003":
      "Số tiền giao dịch vượt quá hạn mức giao dịch trong ngày. Hạn mức còn lại của tài khoản là",
    "600004":
      "Số tiền giao dịch vượt quá hạn mức giao dịch trong ngày của dịch vụ. Hạn mức giao dịch còn lại trong ngày của dịch vụ là",
    "600008":
      "Số tiền giao dịch vượt quá hạn mức được thực hiện cho mỗi lần giao dịch của Quý khách. Hạn mức tối đa cho mỗi lần giao dịch là",
    "600009":
      "Số tiền giao dịch vượt quá hạn mức giao dịch được thực hiện trong ngày của Quý khách. Hạn mức còn lại trong ngày của Quý khách là",
    "117031":
      "Quý khách chưa đăng ký phương thức xác thực hoặc đã bị khóa. Quý khách vui lòng liên hệ tổng đài 19006060 để được hỗ trợ.",
    "117032":
      "Hiện tại quý khách không có phương thức xác thực nào có thể xác thực được giao dịch vừa thực hiện. Quý khách vui lòng đến quầy giao dịch của HDBank để đăng ký phương thức xác thực mới cao hơn.",
    "117003": "Tài khoản không hợp lệ, vui lòng liên hệ: 19006060.",
    "117055":
      "Số tiền giao dịch vượt quá hạn mức giao dịch được thực hiện trong tháng. Hạn mức còn lại của Quý khách khách là",
    "00309":
      "Không có tài khoản hợp lệ để thanh toán, vui lòng liên hệ: 19006060",
    "00310": "Đề nghị nhập mã OTP",
    "00311": "Mã OTP phải bao gồm 6 số",
    "99312": "Bạn đã nhập mã xác thực quá 5 lần. Vui lòng thực hiện lại",
  },
  [LANGUAGE.EN]: {
    "00000": "Thành công",
    "00015": "Thanh toán không thành công, vui lòng liên hệ: 19006060",
    "00006":
      "Giao dịch đã được ghi nhận và đang được xử lý, vui lòng không thực hiện thanh toán lại. Liên hệ HDBank: 19006060 để biết thêm chi tiết.",
    "50001": "Số điện thoại đã bị khóa, vui lòng liên hệ: 19006060",
    "50009": "Tài khoản không hợp lệ để thanh toán, vui lòng liên hệ: 19006060",
    "10008": "Mã OTP không chính xác",
    "10021": "Mã OTP hết hạn",
    "99212": "Tài khoản của Quý khách không đủ số dư để thực hiện giao dịch này. Vui lòng kiểm tra lại",
    "00049":
      "Không tìm thấy giao dịch gạch nợ tương ứng, vui lòng liên hệ: 19006060",
    "40051": "Tài khoản của Quý khách không đủ số dư để thực hiện giao dịch này. Vui lòng kiểm tra lại",
    "40103": "Không hỗ trợ cho tài khoản lương, vui lòng liên hệ: 19006060",
    "20022": "Vượt hạn mức giao dịch",
    "600002":
      "Số tiền giao dịch vượt quá hạn mức cho mỗi lần giao dịch. Hạn mức cho mỗi lần giao dịch",
    "600003":
      "Số tiền giao dịch vượt quá hạn mức giao dịch trong ngày. Hạn mức còn lại của tài khoản là",
    "600004":
      "Số tiền giao dịch vượt quá hạn mức giao dịch trong ngày của dịch vụ. Hạn mức giao dịch còn lại trong ngày của dịch vụ là",
    "600008":
      "Số tiền giao dịch vượt quá hạn mức được thực hiện cho mỗi lần giao dịch của Quý khách. Hạn mức tối đa cho mỗi lần giao dịch là",
    "600009":
      "Số tiền giao dịch vượt quá hạn mức giao dịch được thực hiện trong ngày của Quý khách. Hạn mức còn lại trong ngày của Quý khách là",
    "117031":
      "Quý khách chưa đăng ký phương thức xác thực hoặc đã bị khóa. Quý khách vui lòng liên hệ tổng đài 19006060 để được hỗ trợ.",
    "117032":
      "Hiện tại quý khách không có phương thức xác thực nào có thể xác thực được giao dịch vừa thực hiện. Quý khách vui lòng đến quầy giao dịch của HDBank để đăng ký phương thức xác thực mới cao hơn.",
    "117003": "Tài khoản không hợp lệ, vui lòng liên hệ: 19006060.",
    "117055":
      "Số tiền giao dịch vượt quá hạn mức giao dịch được thực hiện trong tháng. Hạn mức còn lại của Quý khách khách là",
    "00309":
      "Không có tài khoản hợp lệ để thanh toán, vui lòng liên hệ: 19006060",
    "00310": "Đề nghị nhập mã OTP",
    "00311": "Mã OTP phải bao gồm 6 số",
    "99312": "Bạn đã nhập mã xác thực quá 5 lần. Vui lòng thực hiện lại",
  },
};
