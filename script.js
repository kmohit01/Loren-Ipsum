
const text = [
    `The Constitution of India, adopted on January 26, 1950, is the supreme law of the land, embodying the foundational principles and governance framework of the Republic of India. It delineates the structure, powers, and functions of the government at both the central and state levels, as well as the fundamental rights and duties of its citizens. The Constitution serves as the bedrock of India's democratic system, ensuring the rule of law and providing a framework for the nation's progress and development.`,
    `India's Constitution is notable for its extensive coverage and detail, comprising 448 articles, 12 schedules, and numerous amendments. Its length underscores the complexity and comprehensiveness of India's governance structure, addressing a wide range of issues including fundamental rights, directive principles of state policy, parliamentary procedures, federalism, and more. The Constitution reflects the collective wisdom and aspirations of the nation's founding fathers, drawing inspiration from various sources including the constitutions of other countries and India's own historical and cultural heritage.`,
    `The preamble of the Indian Constitution serves as a concise statement of its objectives and ideals, articulating the vision of the framers of the Constitution. It declares India to be a sovereign, socialist, secular, and democratic republic committed to securing justice, liberty, equality, and fraternity for all its citizens. The preamble encapsulates the core values and principles that guide the nation's governance and serves as a touchstone for interpreting the Constitution's provisions and upholding its spirit.`,
    `India's governance structure is characterized by a federal system that balances power between the central government and the states. While the central government possesses authority over matters of national importance, including defense, foreign affairs, and interstate commerce, the states enjoy significant autonomy in managing their internal affairs. However, the Constitution also incorporates unitary features that empower the central government to maintain the unity and integrity of the nation, particularly during times of crisis or emergency. `,
    `Fundamental rights guaranteed by the Constitution form the cornerstone of India's democracy, safeguarding the individual liberties and freedoms of its citizens. These rights include the right to equality before the law, freedom of speech and expression, freedom of religion, cultural and educational rights, and the right to constitutional remedies. They are enshrined in Part III of the Constitution and are justiciable, meaning that citizens can seek legal recourse if their fundamental rights are violated by the state or other entities.`,
    `Directive Principles of State Policy, enshrined in Part IV of the Constitution, provide guidelines for the government to pursue policies and programs aimed at achieving social, economic, and political justice. While not enforceable by the courts, these principles are nonetheless fundamental to the governance of the country and serve as a moral and political compass for policymakers. They encompass a wide range of issues including social welfare, economic development, environmental protection, and promotion of a just and equitable society.`,
    `India's parliamentary system of government is based on the principle of collective responsibility, wherein the executive branch is accountable to the legislature. The President, who serves as the head of state, is a ceremonial figurehead, while the Prime Minister, as the head of government, holds executive power and is responsible to the Parliament. The Parliament consists of two houses: the Lok Sabha (House of the People) and the Rajya Sabha (Council of States), which together exercise the legislative authority of the Union.`,
    `An independent judiciary is a cornerstone of India's democratic system, entrusted with upholding the rule of law, protecting the rights and liberties of citizens, and ensuring the supremacy of the Constitution. The Supreme Court, as the highest judicial authority in the country, has the power of judicial review to interpret the Constitution and adjudicate disputes between the central and state governments, as well as between citizens and the state. The judiciary operates autonomously, free from undue influence or interference from the executive or legislative branches of government.`,
    `The Constitution provides for its own amendment to adapt to changing societal needs and circumstances. Article 368 outlines the procedure for amending the Constitution, which requires a special majority of both houses of Parliament. Certain amendments, such as those affecting the federal structure of the Constitution or the fundamental rights of citizens, necessitate ratification by a majority of state legislatures. The amendment process reflects the Constitution's flexibility and resilience, allowing for its continued relevance and effectiveness in a dynamic and evolving society.`,
    
    
  ];

  const form = document.querySelector(".lorem-form");
  const amount = document.getElementById('amount');
  const result = document.querySelector('.lorem-text');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = parseInt( amount.value);
    const random = Math.floor(Math.random() * text.length);
    
    if(isNaN(value) || value < 1 || value > 9) {
      result.innerHTML = `<p class ="result align="center">${text[random]}</p><br>`;
    }
    else{
      let tempText = text.slice(0, value);
      tempText = tempText.map(function(item){
        return `<p class ="result" align ="center">${item}</p><br>`;
      }).join("")
      result.innerHTML = tempText;
    }

  });