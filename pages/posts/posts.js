import InforCustomer from "components/Customer360Page/components/inforcomponent";
import SearchCustomers from "components/Customer360Page/components/seachcomponent";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
function Homene() {
  
  // const [searchValues, setSearchValues] = useState({
  //   code: "",
  //   cmnd: "",
  //   accountNumber: "",
  // });
   const [data, setData] = useState({});

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //  // setSearchValues({ ...searchValues, [name]: value });
  // };

  // const handleSearchClick = async (event) => {
  //   // Lấy các giá trị từ state object để thực hiện tìm kiếm
  //   //const { code, cmnd, accountNumber } = searchValues;
  //   event.preventDefault();
  //   try {
  //     // Gửi yêu cầu tới API với các tham số tìm kiếm
  //     // move call api vào trong services  
  //     const response = await axios.get("/thuho/api/custommer360/inquiry");

  //     // Xử lý kết quả trả về

  //     console.log(response.data);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }; 
  console.log(data);
  return (
    <>
      <div>
        <SearchCustomers
          // setSearchValues={setSearchValues}
          // searchValues={searchValues}
           setData={setData}
           data = {data}
           
          // handleSearchClick={handleSearchClick}
          // handleInputChange={handleInputChange}
        />
        
      </div>
      <div>
        <InforCustomer data={data} />;
      </div> 
      
    </>
  );
}
// /**
//  * Server side rendering
//  */
// Health.getInitialProps = ({ res, err }: any) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };
export default Homene;
