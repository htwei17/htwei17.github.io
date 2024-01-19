var store = [{
        "title": "My Logo",
        "excerpt":"The site logo is:      The logo is a combination of the following factors:      A clock to tick the proper time   A $\\psi$ symbol to represent the quantum state  ","categories": ["update"],
        "tags": ["logo"],
        "url": "/update/2023/10/20/logo.html",
        "teaser": "/assets/images/fanjingshan.jpeg"
      },{
        "title": "Note: Quantum Resource Theory",
        "excerpt":" Quantum Resource Theory as a Framework for Quantum Information Processing   To be added.   Quantum Entanglement in the Context of Quantum Resource Theory   In this part we illustrate how concepts of quantum resource theory can be applied to the study of quantum entanglement. In this part, we will assume that we have a multipartite quantum system, which is a quantum system composed of multiple parts. For example, a quantum system composed of 2 qubits is a multipartite quantum system. We label A, B, C, … to the parts of the multipartite quantum system.  ","categories": ["note"],
        "tags": ["quantum","entanglement","resource theory"],
        "url": "/note/2024/01/15/qrt.html",
        "teaser": "/assets/images/fanjingshan.jpeg"
      },{
        "title": "Blitz Note: Quantum Measurement",
        "excerpt":"The quantum measurement, formally acting on a density matrix $\\rho$ as   \\[\\rho \\rightarrow \\sum_{i} M_{i} \\rho M_{i}^{\\dagger}.\\]  is a special case of quantum operation, where $i$ indices the different outcomes . The measurement Kraus operators $M_{i}$ are completely positive and satisfy condition s.t. the trace of the density matrix is preserved:   \\[\\sum_{i} M_{i}^{\\dagger} M_{i} = I.\\]  Intuitively, the measurement is a process that transforms a quantum state to a mixed state. $i$ indices the different outcomes, so that the quantum state collapses stochastically into states given by each process operator $M_i$. The measurement operators are also called POVMs (positive operator-valued measures).  ","categories": ["blitz note"],
        "tags": ["quantum","measurement","POVM"],
        "url": "/blitz%20note/2024/01/16/povm.html",
        "teaser": "/assets/images/fanjingshan.jpeg"
      },{
        "title": "Blitz Note: Local Operations and Classical Communication (LOCC)",
        "excerpt":"In the context of quantum entanglement, we want to find a set of ‘‘allowed’’ operations that can be performed on the multipartite quantum system. Motivated both by realistic physical process and our goal to identify the nature of quantum entanglement under restricted quantum and classical operations that are distinguished by the operation range, we introduce the idea of ‘‘local operations and classical communication’’ (LOCC).   As the name suggests, LOCC consists of 2 parts: local (quantum) operations and classical communication. It could be a multi-round process, where the local operations and classical communication are performed once each round. WLoG, we assume that A communicates to B.   For the first part, we simplify the scope of ‘‘local’’ operations to quantum operations performed on a single part of the multipartite quantum system. They can be pure (unitary evolution) or mixed (quantum measurement). They can be in general written in the form:   \\[\\rho \\rightarrow \\sum_{i} (M^A_{i}\\otimes M^B_{i} \\otimes...\\otimes M^{A_k}_{i}) \\rho (M^A_{i}\\otimes M^B_{i} \\otimes...\\otimes M^{A_k}_{i})^{\\dagger},\\]  where $A, B, …, A_i$ labels the parts of the physical system.   While the quantum operations cannot exceed distance limitation, the classical communication is the method to exchange information between the different parts of the quantum system. However, this doesn’t give much modification on the form of outcome of the quantum state, since the communication from e.g. A to B only conditions the quantum operation on B probabilistically. The form of total operation (only consider A and B) is:   \\[\\rho \\rightarrow \\rho'_A = \\sum_i M^A_{i} \\rho (M^A_{i})^{\\dagger} \\rightarrow \\sum_{j} M^B_{j} (\\rho'_A) \\rho'_A (M^B_{j} (\\rho'_A))^{\\dagger},\\]  and this reduces to the same form as above:   \\[\\rho \\rightarrow \\sum_{ij} (M^B_{j,i} \\otimes M^A_{i}) \\rho [(M^A_{i})^{\\dagger} \\otimes (M^B_{j,i})^{\\dagger}].\\] ","categories": ["blitz note"],
        "tags": ["quantum","LOCC","classical communication","locality"],
        "url": "/blitz%20note/2024/01/16/locc.html",
        "teaser": "/assets/images/fanjingshan.jpeg"
      }]
