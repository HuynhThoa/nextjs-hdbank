import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import SearchCustomers from "components/Customer360Page/components/seachcomponent";
import { setDate } from "date-fns";
export const handleSearchClick = async (event) => {
  // Lấy các giá trị từ state object để thực hiện tìm kiếm
  //const { code, cmnd, accountNumber } = searchValues;
  event.preventDefault();
  try {
    // Gửi yêu cầu tới API với các tham số tìm kiếm
    // move call api vào trong services
    const response = await axios.get("/thuho/api/custommer360/inquiry");

    // Xử lý kết quả trả về

    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export  const handleInputChange = (event) => {

//   const [searchValues, setSearchValues] = useState({
//       code: "",
//        cmnd: "",
//        accountNumber: "",
//      });
//      const { name, value } = event.target;
//     setSearchValues({ ...searchValues, [name]: value });
//   };

export default function Service() {
  const [data, setData] = useState({});

  return <button onClick={handleSearchClick}> Click</button>;

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //  // setSearchValues({ ...searchValues, [name]: value });
  // };
}
