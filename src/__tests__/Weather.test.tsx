import { act, waitFor, render, screen } from "@testing-library/react";
import Weather from "../components/Weather";
import { fakeWeatherData } from "../__mocks__/FakeWeatherData";

describe("Weather data - successfully loaded data", () => {
  beforeEach(() => {
    const val = {
      status: 200,
      json: async () => {
        return fakeWeatherData;
      },
    };
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return val;
    });
  });
  it("renders observation data", async () => {
    await act(async () => {
      render(<Weather />);
    });
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const obsWxcondition = screen.getByText(/Partly cloudy/i);
    expect(obsWxcondition).toBeInTheDocument();
  });

  it("renders 4 days of forecast data", async () => {
    await act(async () => {
      render(<Weather />);
    });
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const collection = document.getElementsByClassName("day-column");
    expect(collection.length).toBe(4);
  });
});

describe("Weather data - error state", () => {
  it("renders error message when the request errors in 404 - not found", async () => {
    const val = {
      status: 404,
      json: async () => {
        return {};
      },
    };
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return val;
    });
    await act(async () => {
      render(<Weather />);
    });
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const obsWxcondition = screen.getByText(
      /Couldn't fetch weather data! Please try again later!/i
    );
    expect(obsWxcondition).toBeInTheDocument();
  });
});
