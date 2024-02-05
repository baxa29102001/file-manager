export const parseArgs = (keyword) => {
  const joinedtext = process.argv
    .map((item, index) => {
      if (item.match(/^--/)) {
        return `${item.replace(new RegExp(`^--${keyword}=`), "")}`;
      }
    })
    .filter((item) => item)
    .join(", ");

  return joinedtext
};
