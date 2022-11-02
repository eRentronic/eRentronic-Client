export const DEFAULT_SIDETAB_TOGGLE = {
  connection: { popUp: false, viewMore: false },
  layout: { popUp: false, viewMore: false },
  keyboardSwitch: { popUp: false, viewMore: false },
  vendor: { popUp: false, viewMore: false },
};

export type actionType = {
  type: string;
  payload: { popUp: boolean; viewMore: boolean };
};

export const reducer = (
  state: typeof DEFAULT_SIDETAB_TOGGLE,
  action: actionType,
) => {
  const { type, payload } = action;
  switch (type) {
    case 'dispatchConnection':
      return {
        ...state,
        connection: payload,
      };

    case 'dispatchLayout':
      return { ...state, layout: payload };

    case 'dispatchSwitch':
      return {
        ...state,
        keyboardSwitch: payload,
      };

    case 'dispatchVendor':
      return { ...state, vendor: payload };

    case 'reset':
      return { ...DEFAULT_SIDETAB_TOGGLE };

    default:
      return { ...state };
  }
};
