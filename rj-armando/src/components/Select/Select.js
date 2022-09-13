

const Select = ( {options}) => {

    return(
        <select>
            {
            options.map((opt) => <option key={opt.value} value={opt.value}>{opt.tex} </option>)
            }
        </select>
    )

}

export default Select