export const UncheckIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E0F2FE" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#0086C9" />
    </svg>
  );
};

export const CheckedIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#F0F9FF" />
      <path
        d="M12 5L6.5 10.5L4 8"
        stroke="#0086C9"
        strokeWidth="1.6666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#0086C9" />
    </svg>
  );
};
