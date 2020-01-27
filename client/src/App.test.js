import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';
import Display from './components/Display';
import NavBar from './components/NavBar';
import { componentDidMount } from './App';


it('renders "google searches by player" text', () => {
  const wrapper = rtl.render(<App />);
  const hasTheTitleText = wrapper.queryByText(/google searches by player/i);
  expect(hasTheTitleText).toBeInTheDocument();
});

it('renders "womens world cup soccer" text', () => {
  const wrapper = rtl.render(<App />);
  const hasTheTitleText = wrapper.queryByText(/women's world cup soccer/i);
  expect(hasTheTitleText).toBeInTheDocument();
});

test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible;
});

test('renders without crashing', () => {
  const wrapper = rtl.render(<NavBar/>)
  expect(wrapper).toBeVisible;
});
/*
test('User fetched name should be Tierna Davidson', async () => {
  expect.assertions(1);
  const data = await functions.componentDidMount();
      expect(data.name).toEqual('Tierna Davidson');
});
*/
/*
test("contains Country", () => {

  const expectedCountry = 1;
  const container = render(<Display/>);
  const getByText = container.getByText;
  const getAllByText = container.getAllByText;

  const countryElements = getAllByText(/country/i);
  getByText(/country/i);

  expect(countryElements.length).toBe(expectedCountry);
});
*/
/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/