import { Dispatch } from 'react';

const DEFAULT_SIDETAB_TOGGLE = {
  connection: { popUp: false, viewMore: false },
  layout: { popUp: false, viewMore: false },
  keyboardSwitch: { popUp: false, viewMore: false },
  vendor: { popUp: false, viewMore: false },
};

type actionType = {
  type: string;
  payload: { popUp: boolean; viewMore: boolean };
};

export type filterModelType = {
  keyboardConnections: {
    id: 0;
    name: 'string';
  }[];
  layouts: {
    id: 0;
    name: 'string';
  }[];
  switches: {
    id: 0;
    name: 'string';
  }[];

  vendors: {
    id: 0;
    name: 'string';
  }[];
};

export const getFilterData = (
  { keyboardConnections, layouts, switches, vendors }: filterModelType,
  sideTabToggleState: typeof DEFAULT_SIDETAB_TOGGLE,
  sideTabToggleStateDispatch: Dispatch<actionType>,
) => {
  const { connection, layout, keyboardSwitch, vendor } = sideTabToggleState;
  console.log({ ...connection, popup: !connection.popUp });
  return {
    keyboardConnections: {
      data: keyboardConnections,
      view: connection,
      toggleDispatch: sideTabToggleStateDispatch,

      popUpAction: {
        type: 'dispatchConnection',
        payload: { ...connection, popUp: !connection.popUp },
      },

      viewMoreAction: {
        type: 'dispatchConnection',
        payload: { ...connection, viewMore: !connection.viewMore },
      },
    },
    layouts: {
      data: layouts,
      view: layout,
      toggleDispatch: sideTabToggleStateDispatch,

      popUpAction: {
        type: 'dispatchLayout',
        payload: { ...layout, popUp: !layout.popUp },
      },

      viewMoreAction: {
        type: 'dispatchLayout',
        payload: { ...layout, viewMore: !layout.viewMore },
      },
    },
    switches: {
      data: switches,
      view: keyboardSwitch,
      toggleDispatch: sideTabToggleStateDispatch,

      popUpAction: {
        type: 'dispatchSwitch',
        payload: { ...keyboardSwitch, popUp: !keyboardSwitch.popUp },
      },

      viewMoreAction: {
        type: 'dispatchSwitch',
        payload: { ...keyboardSwitch, viewMore: !keyboardSwitch.viewMore },
      },
    },
    vendors: {
      data: vendors,
      view: vendor,
      toggleDispatch: sideTabToggleStateDispatch,

      popUpAction: {
        type: 'dispatchVendor',
        payload: { ...vendor, popUp: !vendor.popUp },
      },

      viewMoreAction: {
        type: 'dispatchVendor',
        payload: { ...vendor, viewMore: !vendor.viewMore },
      },
    },
  };
};
