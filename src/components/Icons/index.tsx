import Spinner from "../../assets/load-spinner.png"

export const Add = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9 4.5H8.1V8.1H4.5V9.9H8.1V13.5H9.9V9.9H13.5V8.1H9.9V4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z" />
  </svg>
);

export const Delet = () => (
  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.14286 16C1.14286 17.1 2.17143 18 3.42857 18H12.5714C13.8286 18 14.8571 17.1 14.8571 16V4H1.14286V16ZM16 1H12L10.8571 0H5.14286L4 1H0V3H16V1Z" fill="#009EDD"/>
  </svg>
);


export const CartAdd = () => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9082_441)">
    <path d="M6.26677 6.00001H7.4001V4.30001H9.1001V3.16667H7.4001V1.46667H6.26677V3.16667H4.56677V4.30001H6.26677V6.00001ZM4.0001 11.1C3.37676 11.1 2.87243 11.61 2.87243 12.2333C2.87243 12.8567 3.37676 13.3667 4.0001 13.3667C4.62343 13.3667 5.13343 12.8567 5.13343 12.2333C5.13343 11.61 4.62343 11.1 4.0001 11.1ZM9.66677 11.1C9.04343 11.1 8.5391 11.61 8.5391 12.2333C8.5391 12.8567 9.04343 13.3667 9.66677 13.3667C10.2901 13.3667 10.8001 12.8567 10.8001 12.2333C10.8001 11.61 10.2901 11.1 9.66677 11.1ZM4.09643 9.25834L4.11343 9.19034L4.62343 8.26668H8.8451C9.2701 8.26668 9.6441 8.03434 9.83677 7.68301L12.0241 3.71068L11.0381 3.16667H11.0324L10.4091 4.30001L8.8451 7.13334H4.8671L4.79343 6.98034L3.5241 4.30001L2.98576 3.16667L2.4531 2.03334H0.600098V3.16667H1.73343L3.77343 7.46768L3.00843 8.85601C2.91776 9.01468 2.86676 9.20168 2.86676 9.40001C2.86676 10.0233 3.37676 10.5333 4.0001 10.5333H10.8001V9.40001H4.2381C4.16443 9.40001 4.09643 9.33768 4.09643 9.25834Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_9082_441">
    <rect width="13.6" height="13.6" fill="white" transform="translate(0.0334473 0.900024)"/>
    </clipPath>
    </defs>
  </svg>
);


export const ShoppingCart = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.6836 8.27961L12.9055 1.16964C12.8034 1.02608 12.6675 0.909533 12.5097 0.830181C12.3519 0.750829 12.1769 0.711087 12 0.714428C11.6509 0.714428 11.3018 0.866165 11.0945 1.18048L6.31636 8.27961H1.09091C0.490909 8.27961 0 8.76734 0 9.36345C0 9.461 0.0109091 9.55854 0.0436363 9.65609L2.81455 19.7033C3.06545 20.6137 3.90545 21.2857 4.90909 21.2857H19.0909C20.0945 21.2857 20.9345 20.6137 21.1964 19.7033L23.9673 9.65609L24 9.36345C24 8.76734 23.5091 8.27961 22.9091 8.27961H17.6836ZM8.72727 8.27961L12 3.51073L15.2727 8.27961H8.72727ZM12 16.9503C10.8 16.9503 9.81818 15.9749 9.81818 14.7826C9.81818 13.5904 10.8 12.615 12 12.615C13.2 12.615 14.1818 13.5904 14.1818 14.7826C14.1818 15.9749 13.2 16.9503 12 16.9503Z" fill="white"/>
  </svg>
);


export const IconSpinner = () => (
  <>
    <img src={Spinner} alt="" />
  </>
);