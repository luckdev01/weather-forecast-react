# Weather Forecast App

This is the Weather Forecast App built using React and Node.

![image](https://user-images.githubusercontent.com/40633197/221543649-9c527b17-3d87-44f7-b741-6314e81cf688.png)


## Basic Setup

- Clone the repository
```bash
git clone https://github.com/luckdev01/weather-forecast-react.git
```
- Install the packages

```bash
# frontend
cd frontend
npm run setup
cd ..

# backend
cd backend
npm install
cd ..
```

- Environment variables
  * Creat environment files
    ```bash
    # frontend
    cd frontend
    cp .env.example .env
    cd ..

    # backend
    cd backend
    cp .env.example .env
    cd ..
    ```
  * Sign up at https://www.weatherapi.com/ and get API Key
  * Set it as WEATHER_API_KEY in backend/.env

- Start application
```bash
# backend
cd backend
npm start

# frontend
cd frontend
npm start
```

## Technologies
- React 18
- Typescript
- Material UI v5
- Node/Express

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
