import React from 'react';
import styled from 'styled-components';
import { IPriceData } from './Coin';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinTickers } from './api';
import { ChartProps } from './Chart';
import { useOutletContext } from 'react-router-dom';

const PriceChart = styled.div`
  margin-top: 50px;
`;

const PriceBlock = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;
const Rate = styled.span`
  margin-right: 20px;
  font-size: 15px;
  font-weight: 800;
`;
const RateResult = styled.span`
  color: #5484ff;
  font-weight: 800;
`;

function Price() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IPriceData>(
    ['tickers', coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <PriceChart>
      <PriceBlock>
        <Rate>💸 Max change rate in last 24h:</Rate>
        <RateResult>{data?.quotes.USD.market_cap_change_24h}%</RateResult>
      </PriceBlock>
      <PriceBlock>
        <Rate>💰 Change rate(last 1hours):</Rate>
        <RateResult> {data?.quotes.USD.percent_change_1h}%</RateResult>
      </PriceBlock>
      <PriceBlock>
        <Rate>💰 Change rate(last 12hours):</Rate>
        <RateResult> {data?.quotes.USD.percent_change_12h}%</RateResult>
      </PriceBlock>
      <PriceBlock>
        <Rate>💰 Change rate(last 24hours):</Rate>
        <RateResult> {data?.quotes.USD.percent_change_24h}%</RateResult>
      </PriceBlock>
    </PriceChart>
  );
}

export default Price;
