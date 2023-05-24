const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const stringEl = document.createElement('p');
    stringEl.innerText = string;
    htmlElement.appendChild(stringEl);
};

htmlGenerator('Party Time.', partyHeader);