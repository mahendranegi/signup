import styled from "styled-components";

// Wrapper for Login page
export const LoginStyled = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;

  header {
    background: #016b5e;
    color: #fff;
    text-align: center;
    padding: 16px;

    h6 {
      color: #fff;
    }
  }
.MuiContainer-root form {
    width: 600px !important;
    margin: 64px auto !important;
    height: 100%;
    padding: 0 24px;
    display: flex !important;
    flex-direction: column;
    gap: 24px !important;
    box-sizing: border-box;
    justify-content: center;
}
  form {
  

    .flexCenter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;

      .MuiButton-containedPrimary {
        margin: 16px auto 0 !important;
      }
    }

    > div {
      width: 100%;
    }

    button {
      width: max-content;
      margin: 0 auto;
    }

    .MuiButton-containedPrimary {
      width: 200px;
      background: #016b5e;
      margin: 24px auto 0;
    }

    > div:last-child {
      text-align: center;
    }
  }

  /* Signup style */
  .signUppage {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;

    > div {
      width: 48%;
    }
  }

  .MuiContainer-root form.signUpStyle {
    width: 100% !important;
    gap: 0;
  }

  form {
    .MuiButton-containedPrimary {
      margin: 48px 0 0 !important;
    }

    > div:last-child {
      justify-content: end;
      display: flex;
    }
  }

  @media only screen and (max-width: 600px) {
    .signUppage > div {
      width: 100% !important;
    }

    form,.MuiContainer-root form {
      width: 100% !important;
      box-sizing: border-box;
    }
  }
`;
