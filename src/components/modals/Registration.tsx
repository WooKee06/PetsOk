import React from "react";
import "../../style/components/modal/Registration.scss";
import { useForm } from "react-hook-form";

interface RegistrationProp {
  registrModalOpen: boolean;
  handleCloseRegistModal: () => void;
}

type FormData = {
  email: string;
  password: string;
  day: string;
};

export const Registration: React.FC<RegistrationProp> = ({
  registrModalOpen,
  handleCloseRegistModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Данные формы:", data);
  };
  return (
    <div className={`modal-reg ${registrModalOpen ? "hide" : ""}`}>
      <div className="modal-reg__wrapper">
        <div className="title">
          <h2>Log in or register</h2>
          <button>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleCloseRegistModal}
            >
              <path
                d="M7.75696 16.243L16.243 7.757M16.243 16.243L7.75696 7.757"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Your mail"
              {...register("email", {
                required: "Mail is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Incorrect email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Your password"
              {...register("password", {
                required: "A password is required",
                minLength: {
                  value: 6,
                  message: "The password must be at least 6 characters long.",
                },
              })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>

        <a href="">Forgot your password?</a>
        <hr />
        <div className="links">
          <span>Don't forget to subscribe to us</span>
          <div>
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="black" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.037 22.2933C20.2385 19.5914 24.3738 17.8101 26.4429 16.9495C32.3506 14.4923 33.5782 14.0655 34.3783 14.0514C34.5543 14.0483 34.9478 14.0919 35.2026 14.2987C35.4178 14.4733 35.4771 14.7092 35.5054 14.8748C35.5337 15.0404 35.569 15.4175 35.541 15.7122C35.2208 19.076 33.8356 27.2389 33.1308 31.0064C32.8326 32.6005 32.2455 33.135 31.677 33.1873C30.4417 33.301 29.5036 32.3709 28.3071 31.5866C26.4348 30.3593 25.3771 29.5953 23.5597 28.3977C21.4594 27.0136 22.8209 26.2529 24.0179 25.0097C24.3311 24.6843 29.7742 19.7335 29.8795 19.2844C29.8927 19.2282 29.9049 19.0188 29.7805 18.9083C29.6561 18.7977 29.4726 18.8355 29.3401 18.8656C29.1523 18.9082 26.1613 20.8851 20.367 24.7964C19.518 25.3794 18.7491 25.6634 18.0601 25.6486C17.3005 25.6321 15.8394 25.2191 14.7533 24.866C13.4211 24.433 12.3622 24.204 12.4544 23.4686C12.5025 23.0855 13.03 22.6937 14.037 22.2933Z"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="black" />
                <g clipPath="url(#clip0_0_781)">
                  <path
                    d="M21.1191 11.3503L21.3884 12.4413C20.3269 12.7037 19.3109 13.1243 18.3746 13.6891L17.7984 12.7243C18.829 12.1002 19.9488 11.6368 21.1191 11.3503ZM26.8809 11.3503L26.6115 12.4413C27.6731 12.7037 28.6891 13.1243 29.6254 13.6891L30.2084 12.7243C29.1751 12.1007 28.0531 11.6374 26.8809 11.3503ZM13.7243 16.795C13.1007 17.8271 12.6375 18.9479 12.3503 20.1191L13.4413 20.3885C13.7036 19.3269 14.1243 18.3109 14.6891 17.3746L13.7243 16.795ZM13.1242 23C13.1241 22.4545 13.1652 21.9097 13.247 21.3703L12.1355 21.1999C11.9548 22.392 11.9548 23.6046 12.1355 24.7967L13.247 24.6297C13.1653 24.0903 13.1243 23.5455 13.1242 23ZM30.2016 33.2723L29.6254 32.3109C28.6905 32.8762 27.6756 33.2969 26.6149 33.5587L26.8843 34.6497C28.0532 34.3604 29.1716 33.896 30.2016 33.2723ZM34.8757 23C34.8757 23.5455 34.8347 24.0903 34.753 24.6297L35.8645 24.7967C36.0451 23.6046 36.0451 22.392 35.8645 21.1999L34.753 21.3703C34.8348 21.9097 34.8758 22.4545 34.8757 23ZM35.6497 25.8775L34.5587 25.6081C34.2969 26.671 33.8763 27.6882 33.3109 28.6254L34.2757 29.205C34.8999 28.1719 35.3631 27.0499 35.6497 25.8775ZM25.6296 33.753C24.5494 33.9167 23.4506 33.9167 22.3703 33.753L22.2033 34.8645C23.3943 35.0452 24.6057 35.0452 25.7967 34.8645L25.6296 33.753ZM32.7551 29.4505C32.1071 30.3292 31.3301 31.105 30.4504 31.7517L31.1187 32.6586C32.0876 31.9453 32.9448 31.0916 33.662 30.1255L32.7551 29.4505ZM30.4504 14.2448C31.3302 14.8928 32.1072 15.6698 32.7551 16.5495L33.662 15.8745C32.9474 14.9076 32.0924 14.0526 31.1255 13.338L30.4504 14.2448ZM15.2448 16.5495C15.8928 15.6698 16.6698 14.8928 17.5495 14.2448L16.8745 13.338C15.9075 14.0526 15.0526 14.9076 14.3379 15.8745L15.2448 16.5495ZM34.2757 16.795L33.3109 17.3746C33.8762 18.3094 34.2969 19.3244 34.5587 20.385L35.6497 20.1157C35.3625 18.9456 34.8992 17.8259 34.2757 16.795ZM22.3703 12.247C23.4506 12.0833 24.5494 12.0833 25.6296 12.247L25.7967 11.1355C24.6057 10.9548 23.3943 10.9548 22.2033 11.1355L22.3703 12.247ZM15.821 32.9586L13.4993 33.4973L14.0413 31.1756L12.9469 30.9199L12.4049 33.2416C12.3709 33.3856 12.3657 33.5348 12.3895 33.6808C12.4133 33.8267 12.4657 33.9665 12.5436 34.0923C12.6215 34.218 12.7234 34.3271 12.8435 34.4134C12.9636 34.4997 13.0996 34.5614 13.2436 34.5951C13.412 34.6326 13.5865 34.6326 13.755 34.5951L16.0767 34.0599L15.821 32.9586ZM13.1788 29.9175L14.2766 30.1698L14.6516 28.5606C14.1039 27.6419 13.696 26.6469 13.4413 25.6081L12.3503 25.8775C12.5957 26.8718 12.9669 27.8307 13.4549 28.7311L13.1788 29.9175ZM18.4291 32.3518L16.8199 32.7268L17.0756 33.8246L18.2587 33.5485C19.1584 34.038 20.1175 34.4092 21.1123 34.6531L21.3816 33.5621C20.3461 33.304 19.3546 32.8939 18.4394 32.345L18.4291 32.3518ZM24 13.2493C18.6132 13.2527 14.2527 17.6201 14.2527 23.0034C14.2557 24.837 14.7743 26.6328 15.7494 28.1856L14.8118 32.1881L18.811 31.2506C23.3693 34.1178 29.3901 32.7507 32.2574 28.1958C35.1246 23.641 33.7609 17.6201 29.206 14.7494C27.6467 13.7688 25.842 13.2488 24 13.2493Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_781">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(12 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="black" />
                <path
                  d="M32.2586 22.7775C32.1144 22.7084 31.9679 22.6419 31.8196 22.5782C31.5612 17.8172 28.9597 15.0915 24.5915 15.0636C24.5717 15.0635 24.552 15.0635 24.5322 15.0635C21.9195 15.0635 19.7465 16.1788 18.409 18.2082L20.8114 19.8562C21.8105 18.3403 23.3786 18.0171 24.5334 18.0171C24.5467 18.0171 24.5601 18.0171 24.5733 18.0172C26.0116 18.0264 27.0969 18.4446 27.7994 19.2601C28.3106 19.8538 28.6525 20.6742 28.8218 21.7097C27.5466 21.4929 26.1675 21.4263 24.6931 21.5108C20.54 21.7501 17.8701 24.1722 18.0494 27.5379C18.1404 29.2452 18.9909 30.7139 20.4442 31.6734C21.6729 32.4844 23.2554 32.8811 24.9001 32.7913C27.0722 32.6722 28.7761 31.8435 29.9648 30.3282C30.8676 29.1775 31.4386 27.6863 31.6907 25.8073C32.7258 26.432 33.493 27.2541 33.9167 28.2423C34.6371 29.9222 34.6791 32.6827 32.4267 34.9332C30.4532 36.9048 28.081 37.7577 24.4959 37.784C20.519 37.7545 17.5114 36.4792 15.5559 33.9933C13.7248 31.6655 12.7785 28.3033 12.7432 24C12.7785 19.6966 13.7248 16.3344 15.5559 14.0067C17.5114 11.5208 20.519 10.2454 24.4958 10.2159C28.5015 10.2457 31.5615 11.5272 33.5918 14.025C34.5874 15.2499 35.338 16.7904 35.8328 18.5864L38.648 17.8353C38.0483 15.6246 37.1045 13.7195 35.8202 12.1396C33.2173 8.93723 29.4106 7.29632 24.5056 7.2623H24.486C19.591 7.2962 15.8269 8.94336 13.2981 12.158C11.0479 15.0185 9.88715 18.9989 9.84814 23.9882L9.84802 24L9.84814 24.0118C9.88715 29.0011 11.0479 32.9815 13.2981 35.8421C15.8269 39.0566 19.591 40.7039 24.486 40.7377H24.5056C28.8575 40.7075 31.925 39.5681 34.4521 37.0434C37.7583 33.7403 37.6588 29.6 36.5691 27.0583C35.7873 25.2356 34.2967 23.7552 32.2586 22.7775ZM24.7447 29.842C22.9244 29.9445 21.0334 29.1275 20.9402 27.3775C20.8711 26.08 21.8636 24.6322 24.8564 24.4597C25.1991 24.44 25.5354 24.4303 25.8658 24.4303C26.9529 24.4303 27.9699 24.5359 28.8945 24.738C28.5496 29.0448 26.5268 29.7442 24.7447 29.842Z"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="black" />
                <g clipPath="url(#clip0_0_745)">
                  <path
                    d="M24 14.1628C27.206 14.1628 27.5824 14.1771 28.8496 14.2342C30.0215 14.2866 30.655 14.4819 31.079 14.6487C31.6411 14.8678 32.0413 15.125 32.4605 15.5443C32.8797 15.9635 33.1417 16.3636 33.3561 16.9258C33.5181 17.3497 33.7182 17.9833 33.7706 19.1552C33.8277 20.4224 33.842 20.7987 33.842 24.0048C33.842 27.2108 33.8277 27.5871 33.7706 28.8543C33.7182 30.0262 33.5228 30.6598 33.3561 31.0838C33.137 31.6459 32.8797 32.046 32.4605 32.4653C32.0413 32.8845 31.6411 33.1465 31.079 33.3609C30.655 33.5228 30.0215 33.7229 28.8496 33.7753C27.5824 33.8325 27.206 33.8468 24 33.8468C20.794 33.8468 20.4176 33.8325 19.1505 33.7753C17.9786 33.7229 17.345 33.5276 16.921 33.3609C16.3589 33.1417 15.9587 32.8845 15.5395 32.4653C15.1203 32.046 14.8583 31.6459 14.6439 31.0838C14.4819 30.6598 14.2819 30.0262 14.2295 28.8543C14.1723 27.5871 14.158 27.2108 14.158 24.0048C14.158 20.7987 14.1723 20.4224 14.2295 19.1552C14.2819 17.9833 14.4772 17.3497 14.6439 16.9258C14.863 16.3636 15.1203 15.9635 15.5395 15.5443C15.9587 15.125 16.3589 14.863 16.921 14.6487C17.345 14.4867 17.9786 14.2866 19.1505 14.2342C20.4176 14.1723 20.7987 14.1628 24 14.1628ZM24 12C20.7416 12 20.3319 12.0143 19.0504 12.0715C17.7737 12.1286 16.9019 12.3335 16.1397 12.6288C15.349 12.9337 14.682 13.3482 14.0151 14.0151C13.3482 14.682 12.9385 15.3537 12.6288 16.1397C12.3335 16.9019 12.1286 17.7737 12.0715 19.0552C12.0143 20.3319 12 20.7416 12 24C12 27.2584 12.0143 27.6681 12.0715 28.9496C12.1286 30.2263 12.3335 31.0981 12.6288 31.865C12.9337 32.6558 13.3482 33.3227 14.0151 33.9897C14.682 34.6566 15.3537 35.0663 16.1397 35.3759C16.9019 35.6713 17.7737 35.8761 19.0552 35.9333C20.3366 35.9905 20.7416 36.0048 24.0048 36.0048C27.268 36.0048 27.6729 35.9905 28.9544 35.9333C30.2311 35.8761 31.1028 35.6713 31.8698 35.3759C32.6606 35.0711 33.3275 34.6566 33.9945 33.9897C34.6614 33.3227 35.0711 32.6511 35.3807 31.865C35.6761 31.1028 35.8809 30.231 35.9381 28.9496C35.9953 27.6681 36.0095 27.2632 36.0095 24C36.0095 20.7368 35.9953 20.3319 35.9381 19.0504C35.8809 17.7737 35.6761 16.9019 35.3807 16.135C35.0758 15.3442 34.6614 14.6773 33.9945 14.0103C33.3275 13.3434 32.6558 12.9337 31.8698 12.6241C31.1076 12.3287 30.2358 12.1239 28.9544 12.0667C27.6681 12.0143 27.2584 12 24 12Z"
                    fill="white"
                  />
                  <path
                    d="M24 14.1628C27.206 14.1628 27.5824 14.1771 28.8496 14.2342C30.0215 14.2866 30.655 14.4819 31.079 14.6487C31.6411 14.8678 32.0413 15.125 32.4605 15.5443C32.8797 15.9635 33.1417 16.3636 33.3561 16.9258C33.5181 17.3497 33.7182 17.9833 33.7706 19.1552C33.8277 20.4224 33.842 20.7987 33.842 24.0048C33.842 27.2108 33.8277 27.5871 33.7706 28.8543C33.7182 30.0262 33.5228 30.6598 33.3561 31.0838C33.137 31.6459 32.8797 32.046 32.4605 32.4653C32.0413 32.8845 31.6411 33.1465 31.079 33.3609C30.655 33.5228 30.0215 33.7229 28.8496 33.7753C27.5824 33.8325 27.206 33.8468 24 33.8468C20.794 33.8468 20.4176 33.8325 19.1505 33.7753C17.9786 33.7229 17.345 33.5276 16.921 33.3609C16.3589 33.1417 15.9587 32.8845 15.5395 32.4653C15.1203 32.046 14.8583 31.6459 14.6439 31.0838C14.4819 30.6598 14.2819 30.0262 14.2295 28.8543C14.1723 27.5871 14.158 27.2108 14.158 24.0048C14.158 20.7987 14.1723 20.4224 14.2295 19.1552C14.2819 17.9833 14.4772 17.3497 14.6439 16.9258C14.863 16.3636 15.1203 15.9635 15.5395 15.5443C15.9587 15.125 16.3589 14.863 16.921 14.6487C17.345 14.4867 17.9786 14.2866 19.1505 14.2342C20.4176 14.1723 20.7987 14.1628 24 14.1628Z"
                    fill="white"
                  />
                  <path
                    d="M24 17.8404C20.5986 17.8404 17.8356 20.5986 17.8356 24.0048C17.8356 27.4109 20.5939 30.1691 24 30.1691C27.4061 30.1691 30.1643 27.4109 30.1643 24.0048C30.1643 20.5986 27.4061 17.8404 24 17.8404ZM24 28.0016C21.7896 28.0016 19.9984 26.2104 19.9984 24C19.9984 21.7896 21.7896 19.9984 24 19.9984C26.2104 19.9984 28.0016 21.7896 28.0016 24C28.0016 26.2104 26.2104 28.0016 24 28.0016Z"
                    fill="black"
                  />
                  <path
                    d="M30.4073 19.0314C31.2018 19.0314 31.846 18.3872 31.846 17.5927C31.846 16.7981 31.2018 16.154 30.4073 16.154C29.6127 16.154 28.9686 16.7981 28.9686 17.5927C28.9686 18.3872 29.6127 19.0314 30.4073 19.0314Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_745">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="black" />
                <path
                  d="M29.2137 25.3282L29.8356 21.233H25.9452V18.5767C25.9452 17.4561 26.4877 16.3631 28.2301 16.3631H30V12.8767C30 12.8767 28.3945 12.6 26.8603 12.6C23.6548 12.6 21.5616 14.5618 21.5616 18.1119V21.233H18V25.3282H21.5616V35.2285C22.2767 35.3419 23.0082 35.4 23.7534 35.4C24.4986 35.4 25.2301 35.3419 25.9452 35.2285V25.3282H29.2137Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
