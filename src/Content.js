const Content = () => {
    const handleNameChange = () =>{
        const names =['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    
      }

    return(
        <main>
            <p>
                {handleNameChange()}
            </p>
        </main>
    )
}

export default Content;