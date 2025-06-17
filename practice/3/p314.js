/*
Годовой доход сотрудника зависит от его зарплаты, но для разных уровней вычисляется по-разному.

Джуниор получает только зарплату
Мидл дополнительно получает годовую премию в размере 10% от дохода
Сеньор получает годовую премию в размере 10% от дохода + 5% за каждый год опыта
Тимлид получает годовую премию в размере 20% от дохода + 10% за каждый год опыта

На вход приходит массив с данными о сотрудниках. 
Необходимо посчитать размер фонда оплаты труда команды — общую сумму расходов на всю команду за год.
*/

const salaryBonus = {
  junior: {
    annualBonus: 0,
    experienceBonus: 0,
  },

  middle: {
    annualBonus: 0.1,
    experienceBonus: 0,
  },

  senior: {
    annualBonus: 0.1,
    experienceBonus: 0.05,
  },

  teamlead: {
    annualBonus: 0.2,
    experienceBonus: 0.1,
  },

  default: {
    annualBonus: 0,
    experienceBonus: 0,
  },

  calc({ level, monthlyWage, tenure }) {
    const { annualBonus, experienceBonus } = this[level] ?? this.default; // NOTE или правильно выбрасывать ошибку?
    return monthlyWage * (annualBonus + experienceBonus * tenure);
  },
};

const MONTH_IN_YEAR = 12;

function totalIncome(employees) {
  return (
    employees
      .map(({ level, monthlyWage, tenure }) => {
        return (
          monthlyWage +
          salaryBonus.calc({
            level,
            monthlyWage,
            tenure,
          })
        );
      })
      .reduce((total, amount) => total + amount, 0) * MONTH_IN_YEAR
  );
}

const employees = [
  {
    name: "Andrew Clark",
    level: "junior",
    monthlyWage: 5000,
    tenure: 2,
  },
  {
    name: "Dan Abramov",
    level: "middle",
    monthlyWage: 6000,
    tenure: 4,
  },
  {
    name: "Sebastian Markbåge",
    level: "teamlead",
    monthlyWage: 10000,
    tenure: 10,
  },
  {
    name: "Sophie Alpert",
    level: "senior",
    monthlyWage: 9000,
    tenure: 9,
  },
  {
    name: "Tianyu Yao",
    level: "middle",
    monthlyWage: 7000,
    tenure: 3,
  },
];
// totalIncome(employees);
console.log(totalIncome(employees));
