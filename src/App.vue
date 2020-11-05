<template>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  border: none;
}
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.1rem;
  font-family: Nunito;
}
#auth-container {
  background: url("/auth_bg.jpg") no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    min-width: 700px;
    display: flex;
    flex-direction: row;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #4b413a;
    #form-info {
      background-color: rgba(255, 255, 0, 0.611);
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      text-align: center;
      padding: 6rem 2rem;
      width: 40%;

      h1 {
        font-family: Capriola;
        text-align: left;
        font-size: 2.5rem;
      }
      h5 {
        color: white;
      }
    }
    #form-container {
      width: 60%;
      background-color: white;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h2 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
      }
      #error {
        color: red;
        font-size: 0.9rem;
      }

      form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        label {
          display: none;
        }
        input,
        button {
          display: block;
          font-family: Nunito;
        }
        input:not([type="checkbox"]) {
          width: 20rem;
          margin-bottom: 2rem;
          border-radius: 4px;
          border: 1px solid lightgrey;
          padding: 1rem;
          &.err-input {
            border: 1px solid rgb(208, 13, 13);
          }
        }
        button[type="submit"] {
          display: inline-block;
          text-align: center;
          padding: 0.8rem 2rem;
          border: 2px solid rgb(228, 228, 138);
          background-color: rgb(225, 225, 31);
          border-radius: 1rem 0.1rem;
          color: rgb(55, 54, 54);
          font-weight: bold;
        }

        & ~ p {
          margin-top: 2rem;
          a {
            text-decoration: none;
            color: rgb(211, 211, 38);
            font-weight: bold;
          }
        }
      }

      form > div {
        margin-top: -1.5rem;
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        padding: 0.1rem 2rem;

        label {
          display: inline-block;

          input {
            display: inline-block;
            padding: 5rem;
          }
        }
        a {
          display: inline-block;
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
}

#container {
  padding: 1px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  width: 100vw;
  section {
    position: relative;
    padding: 1rem 1rem;
    padding-top: 2rem;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 6px 6px 13px rgb(174, 174, 159), -6px -6px 13px #ffffff;
    width: 600px;
    flex-direction: column;
    button#logout {
      position: absolute;
      border: 1px solid rgb(201, 201, 57);
      right: 10px;
      font-weight: bold;
      border-radius: 4px;
      padding: 4px 8px;
      cursor: pointer;
    }

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }
    h2 {
      margin: 5px auto;
      margin-bottom: 1px;
    }
    h5#subtitle {
      margin-top: 0;
      color: rgb(214, 214, 24);
    }
    .line {
      height: 1px;
      background-color: lightgray;
      margin: 0 auto;
      width: 95%;
    }
    h5.title {
      border: 2px solid rgb(201, 201, 57);
      padding: 0.4rem 0.8rem;
      align-self: flex-start;
      margin-bottom: 5px;
    }
    p {
      margin-top: 5px;
      color: rgb(90, 88, 88);
    }
    p#mail {
      span {
        font-weight: bold;
        color: black;
      }
    }
  }

  footer {
    position: absolute;
    bottom: 0.2rem;
    p > b {
      font-family: Capriola;
      color: rgb(187, 187, 24);
    }
  }
}

@media screen and (max-width: 700px) {
  #auth-container {
    section {
      min-width: unset;
      width: 80%;
      #form-info {
        display: none;
      }
      #form-container {
        width: 100%;
        form > div {
          display: unset;
          label,
          a {
            margin-bottom: 8px;
            display: block;
          }
        }
      }
    }
  }
}
</style>
