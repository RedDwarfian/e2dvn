
let Aya = {
  name: 'Aya',
  color: 'Yellow',
};
show(tb, {
  a: 1
})

Aya`Bacon ipsum dolor amet pork belly jowl brisket burgdoggen hamburger t-bone short ribs cupim ball tip sirloin. Filet mignon pig boudin shank alcatra porchetta pork chop chicken meatloaf kevin rump shoulder biltong. Pork belly turkey landjaeger bresaola kielbasa pastrami t-bone meatball ham hock pork loin. Meatball biltong t-bone, capicola spare ribs burgdoggen pancetta hamburger boudin tri-tip rump prosciutto pork. Cupim t-bone fatback shankle chuck doner.`;
Aya`Ham hock beef kielbasa, shankle pork tail burgdoggen pork loin short ribs salami rump ground round drumstick filet mignon leberkas. Tail jerky pork belly turducken. Flank beef venison burgdoggen tongue ribeye pancetta corned beef meatloaf rump fatback filet mignon. Bresaola biltong short ribs, kevin turkey boudin chicken pork loin beef flank jowl filet mignon tongue tail. Pastrami strip steak bresaola shoulder biltong ball tip ham flank brisket t-bone ribeye venison prosciutto. Hamburger pork belly swine short ribs tongue pork spare ribs cupim. Salami burgdoggen brisket fatback.`;
Aya`Bacon ipsum dolor amet pork belly jowl brisket burgdoggen hamburger t-bone short ribs cupim ball tip sirloin. Filet mignon pig boudin shank alcatra porchetta pork chop chicken meatloaf kevin rump shoulder biltong. Pork belly turkey landjaeger bresaola kielbasa pastrami t-bone meatball ham hock pork loin. Meatball biltong t-bone, capicola spare ribs burgdoggen pancetta hamburger boudin tri-tip rump prosciutto pork. Cupim t-bone fatback shankle chuck doner.`;
Aya`Ham hock beef kielbasa, shankle pork tail burgdoggen pork loin short ribs salami rump ground round drumstick filet mignon leberkas. Tail jerky pork belly turducken. Flank beef venison burgdoggen tongue ribeye pancetta corned beef meatloaf rump fatback filet mignon. Bresaola biltong short ribs, kevin turkey boudin chicken pork loin beef flank jowl filet mignon tongue tail. Pastrami strip steak bresaola shoulder biltong ball tip ham flank brisket t-bone ribeye venison prosciutto. Hamburger pork belly swine short ribs tongue pork spare ribs cupim. Salami burgdoggen brisket fatback.`;
Aya`Bacon ipsum dolor amet pork belly jowl brisket burgdoggen hamburger t-bone short ribs cupim ball tip sirloin. Filet mignon pig boudin shank alcatra porchetta pork chop chicken meatloaf kevin rump shoulder biltong. Pork belly turkey landjaeger bresaola kielbasa pastrami t-bone meatball ham hock pork loin. Meatball biltong t-bone, capicola spare ribs burgdoggen pancetta hamburger boudin tri-tip rump prosciutto pork. Cupim t-bone fatback shankle chuck doner.`;
Aya`Ham hock beef kielbasa, shankle pork tail burgdoggen pork loin short ribs salami rump ground round drumstick filet mignon leberkas. Tail jerky pork belly turducken. Flank beef venison burgdoggen tongue ribeye pancetta corned beef meatloaf rump fatback filet mignon. Bresaola biltong short ribs, kevin turkey boudin chicken pork loin beef flank jowl filet mignon tongue tail. Pastrami strip steak bresaola shoulder biltong ball tip ham flank brisket t-bone ribeye venison prosciutto. Hamburger pork belly swine short ribs tongue pork spare ribs cupim. Salami burgdoggen brisket fatback.`;
Aya`Bacon ipsum dolor amet pork belly jowl brisket burgdoggen hamburger t-bone short ribs cupim ball tip sirloin. Filet mignon pig boudin shank alcatra porchetta pork chop chicken meatloaf kevin rump shoulder biltong. Pork belly turkey landjaeger bresaola kielbasa pastrami t-bone meatball ham hock pork loin. Meatball biltong t-bone, capicola spare ribs burgdoggen pancetta hamburger boudin tri-tip rump prosciutto pork. Cupim t-bone fatback shankle chuck doner.`;
Aya`Ham hock beef kielbasa, shankle pork tail burgdoggen pork loin short ribs salami rump ground round drumstick filet mignon leberkas. Tail jerky pork belly turducken. Flank beef venison burgdoggen tongue ribeye pancetta corned beef meatloaf rump fatback filet mignon. Bresaola biltong short ribs, kevin turkey boudin chicken pork loin beef flank jowl filet mignon tongue tail. Pastrami strip steak bresaola shoulder biltong ball tip ham flank brisket t-bone ribeye venison prosciutto. Hamburger pork belly swine short ribs tongue pork spare ribs cupim. Salami burgdoggen brisket fatback.`;

handle({
  'new-game': () => {
     show(newGame, { x: 200, y: 200 });
     wait(400);
     hide(newGame, { a: 0 });
  },
  'cb': () => {
    cb.checked = !cb.checked;
  }
});