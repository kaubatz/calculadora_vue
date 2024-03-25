const { createApp } = Vue

createApp({
    data(){
        return {
           display: '0',
           numAtual: 0.0,
           numAnterior: 0.0,
           decimal: '',
           sinal: '',
           flag: 0           //1 digitando numero - 0 numero novo
        }
    },
    methods: {
        clear(){
            this.display = '0'
            this.numAtual = 0.0
            this.numAnterior = 0.0
            this.sinal = ''
            this.decimal = ''
            this.flag = 0
        },

        /* botoes numericos */
        botao(x){
            if (this.display === '0' || this.flag === 0){

                if (x === '.'){
                    x = '0.'
                    this.decimal = '.'
                }

                this.display = x
                this.numAtual = parseFloat(this.display)
                this.flag = 1

            }                
            else {
                if(x === '.'){
                    if (this.decimal === '.'){
                        x = ''
                    }
                     //caso ja tenha ponto no numero, vai desconsiderar
                    this.decimal = '.'
                }

                this.display += x
                this.numAtual = parseFloat(this.display)
            }                                        
        },

        tecla_sinal(y){      
            if (this.sinal === '+') {
                this.numAnterior += this.numAtual            
            }
            else if (this.sinal === '-') {
                this.numAnterior -= this.numAtual            
            }
            else if (this.sinal === 'x') {
                this.numAnterior *= this.numAtual            
            }
            else if (this.sinal === '/') {
                if (this.numAtual === 0) {
                    this.display = 'ERRO' // ao dar erro de divisão por zero simplesmente vai voltar ao numero anterior
                }
                else {
                    this.numAnterior /= this.numAtual            
                }
            }
            else{
                // if (y === '='){
                    this.numAnterior = parseFloat(this.display) 
                // }                
            }

            this.display = this.numAnterior
            
            this.numAtual = 0
            this.decimal = ''
            if (y === '='){
                this.sinal = ''        
            }
            else {
                this.sinal = y    
            }           

            this.flag = 0
        }
    }

}).mount("#app")