const handleClickScroll = (id: string, scrollBehaviour: 'auto' | 'smooth') => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: scrollBehaviour});
    }
  };

  export default handleClickScroll;
