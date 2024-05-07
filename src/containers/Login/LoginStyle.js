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
    height: "50%",
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
    height: "50%",
    backgroundColor: "#00000000",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 10,
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
};
