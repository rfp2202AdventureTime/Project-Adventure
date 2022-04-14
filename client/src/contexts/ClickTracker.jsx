import axios from 'axios';

import Console from '../Console';

function useTracking({ widget }) {
  const trackEvent = ({ element }) => {
    axios({
      method: 'post',
      url: '/interactions',
      data: { element, widget, time: new Date() },
    }).then(({ data }) => { Console.log(data, widget, element); })
      .catch((err) => Console.log(err));
  };
  return { trackEvent };
}

export default useTracking;
