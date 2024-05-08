import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextComponent from "../../components/TextComponent";
import { Link } from "react-router-dom";
import { getSingleCustomer } from "../../reduxStore/Actions";
import { userInfoStyle } from "./UserStyles";

const UserInfo = () => {
  const userData = useSelector((state) => state.admin.customerloginData);
  const token = useSelector((state) => state.admin.userToken);
  const dispatch = useDispatch();
  const userID = userData?.data?.data?.id;
  const data = useSelector((state) => state.admin.singleUserData);

  useEffect(() => {
    dispatch(getSingleCustomer(userID, token));
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("userInfo", JSON.stringify(data));
    }
  }, [token]);
  return (
    <div style={userInfoStyle.container}>
      <div style={userInfoStyle.titleStyleView}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="User Information"
          textAlign="left"
          fontSize={20}
          fontWeight="bolder"
        />
      </div>
      <div style={userInfoStyle.componentView}>
        <div style={userInfoStyle.componentInnerView}>
          <div style={userInfoStyle.nameView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Name: "
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.first_name} ${data?.last_name}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
          <div style={userInfoStyle.emailView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Email: "
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.email}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
          <div style={userInfoStyle.addressView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Address: "
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.address}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
          <div style={userInfoStyle.numberView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Contact Number"
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.contact_no}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
          <div style={userInfoStyle.dobView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Date of Birth: "
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.dob}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={userInfoStyle.navMsgView}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Do you want to update then "
          textAlign="left"
          fontSize={16}
          fontWeight="normal"
          fontStyle="inherit"
        />
        <Link to="/Update user" style={{ marginLeft: 5 }}>
          <TextComponent
            fontFamily="fantasy"
            color="purple"
            text="click here "
            textAlign="left"
            fontSize={16}
            fontWeight="normal"
            fontStyle="inherit"
          />
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
