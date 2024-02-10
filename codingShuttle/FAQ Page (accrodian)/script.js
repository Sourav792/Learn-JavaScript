const accrodians = document.querySelectorAll('.accrodian');

accrodians.forEach(accrodian => {
  const icon = accrodian.querySelector('.icon');
  const answer = accrodian.querySelector('.answer');

  accrodian.addEventListener('click', () => {
    // icon.classList.toggle('active'); 
    // answer.classList.toggle('active');

    if (icon.classList.contains('active')) {
      icon.classList.remove('active');
      answer.Style.maxHeight = null;
    } else {
        icon.classList.add('active');
        answer.Style.maxHeight = answer.scrollHeight + '.px';
    }
  });
});
