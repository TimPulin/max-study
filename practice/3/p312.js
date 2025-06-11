function innerJoin(arrLeft, arrRight, keyLeft, keyRight) {
  const result = [];

  for (const itemLeft of arrLeft) {
    const filtered = arrRight
      .filter((itemRight) => itemRight[keyRight] === itemLeft[keyLeft])
      .map((itemRight) => joinItems(itemLeft, itemRight));

    result.push(...filtered);
  }

  return result;
}

function joinItems(itemLeft, itemRight) {
  return {
    ...itemLeft,
    ...itemRight,
  };
}

console.log(
  innerJoin(
    [{ id: 1 }, { id: 2 }],
    [{ clientId: 1 }, { clientId: 2 }],
    "id",
    "clientId"
  )
);
