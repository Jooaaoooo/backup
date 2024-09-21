namespace casting {
    let idade: any = 25
    (idade as number).toFixed()
    (idade as string).length;
    (idade as string[]).foreach(x => {
        console.log(x);
    })
}