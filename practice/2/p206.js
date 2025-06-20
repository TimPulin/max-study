/*
Как работают кнопки лайка и дислайка на ютубе? Изначально ни одна из них не выбрана. 
Если вы нажимаете на кнопку лайк, то она становится активной. 
Если вы нажмете на нее еще раз, то она отожмется и активной кнопки не будет.

Если изначально нажать на лайк, а потом на дислайк, то активной будет только кнопка дислайка. 
Кнопка лайка будет неактивной, т.к. активной может быть только одна кнопка.

Определите, какая кнопка будет выбрана после серии нажатий. Считаем, что изначально ни одна кнопка не выбрана.
*/

function likeOrDislike(buttons) {
  return buttons.reduce(
    (current, button) => (button === current ? "Nothing" : button),
    "Nothing"
  );
}
