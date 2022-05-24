import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Card Insurance 1",
      amount: 290.05,
      date: new Date(2021, 2, 12),
    },
    {
      id: 2,
      title: "Card Insurance 2",
      amount: 290.05,
      date: new Date(2021, 3, 12),
    },
    {
      id: 3,
      title: "Card Insurance 3",
      amount: 290.05,
      date: new Date(2021, 4, 12),
    },
    {
      id: 4,
      title: "Card Insurance 4",
      amount: 290.05,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
