import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../../components/ForecastSummary';



    describe("ForecastSummary", () => {
        it("renders a forecast summary", () => {
          const { getByText } = render(
            <ForecastSummary date="1525046400000" temperature="11°c" description="Clear" icon="211"/>
          );
           // eslint-disable-next-line testing-library/prefer-screen-queries
           expect(getByText(/1525046400000/i, /11°c/i, /Clear/i, /211/i)).toBeTruthy();
        });
      });