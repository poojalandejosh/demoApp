import background from "../../assets/images/bankBackground.jpg";
export const styles = {
  container: {
    backgroundImage: `url(${background})`,
    height: "91.5vh",
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  loginView: {
    width: "50%",
    height: "60%",
    backgroundColor: "#00000000",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 5,
  },
  loginTitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "fantasy",
  },
  labelStyle: {
    fontFamily: "serif",
    color: "white",
    fontWeight: "10",
  },
  inputStyle: {
    // marginTop: 5,
    padding: 5,
    borderRadius: 5,
    border: "none",
    outline: "none",
    backgroundColor: "#00000000",
    fontSize: 16,
  },
  inputAndLabelView: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
  },
  adminLoginView: {
    width: "50%",
    height: "60%",
    backgroundColor: "#00000000",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 15,
    borderRadius: 5,
  },
  btnView: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  loginBtnStyle: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    border: "none",
    fontFamily: "fantasy",
    fontSize: 16,
  },

  formStyle: {
    flexDirection: "column",
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  emailLabel: {
    marginBottom: 5,
    marginTop: 5,
    paddingLeft: 10,
    color: "white",
  },
  adminLabelEmail: {
    marginBottom: 5,
    marginTop: 5,
    paddingLeft: 10,
  },
  adminEmailErr: {
    marginTop: 10,
    marginBottom: 5,
  },
  adminPassErr: {
    marginTop: 5,
    marginBottom: 5,
  },
  adminLabel: {
    marginBottom: 5,
    marginTop: 5,
    paddingLeft: 10,
  },
  passwordView: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  iconStyle: {
    marginRight: 10,
    color: "black",
  },
  userEmailErr: {
    marginTop: 10,
    marginBottom: 5,
  },
  userPassLabel: {
    marginBottom: 5,
    marginTop: 5,
    paddingLeft: 10,
    color: "white",
  },
  custEmailErrView: {},
};
