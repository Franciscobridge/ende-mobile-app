import { Settings } from "@/@types/settings-types";

export const settings: Settings = {
  category: [
    {
      categoryName: "Conta",
      items: [
        {
          title: "Conta e contrato",
          icon: "user",
          color: "blue",
          description: "Informações do titular e dados do contrato",
          route: "/account/contract"
        },
        {
          title: "Saldo e recargas",
          icon: "credit-card",
          color: "green",
          description: "Consulte o saldo e recargas realizadas",
          route: "/account/balance"
        },
        {
          title: "Contador pré-pago",
          icon: "cpu",
          color: "orange",
          description: "Dados e estado do contador de energia",
          route: "/account/meter"
        },
        {
          title: "Tarifa aplicada",
          icon: "percent",
          color: "purple",
          description: "Tarifa de energia atualmente em vigor",
          route: "/account/tariff"
        }
      ]
    },

    {
      categoryName: "Consumo",
      items: [
        {
          title: "Histórico de consumo",
          icon: "bar-chart-2",
          color: "blue",
          description: "Registo do consumo diário e mensal",
          route: "/consumption/history"
        },
        {
          title: "Estimativa de autonomia",
          icon: "trending-up",
          color: "green",
          description: "Previsão de duração do saldo atual",
          route: "/consumption/estimate"
        },
        {
          title: "Alertas de saldo",
          icon: "alert-triangle",
          color: "red",
          description: "Avisos quando o saldo estiver baixo",
          route: "/consumption/alerts"
        },
        {
          title: "Dicas de economia",
          icon: "activity",
          color: "green",
          description: "Sugestões para reduzir o consumo",
          route: "/consumption/tips"
        }
      ]
    },

    {
      categoryName: "Pagamentos",
      items: [
        {
          title: "Comprar energia",
          icon: "shopping-cart",
          color: "orange",
          description: "Compra de energia elétrica pré-paga",
          route: "/payments/buy"
        },
        {
          title: "Métodos de pagamento",
          icon: "dollar-sign",
          color: "purple",
          description: "Formas de pagamento disponíveis",
          route: "/payments/methods"
        },
        {
          title: "Histórico de pagamentos",
          icon: "file-text",
          color: "blue",
          description: "Registo de pagamentos efetuados",
          route: "/payments/history"
        }
      ]
    },

    {
      categoryName: "Segurança",
      items: [
        {
          title: "Segurança",
          icon: "lock",
          color: "green",
          description: "Definições de proteção da conta",
          route: "/security/privacy"
        },
        {
          title: "Alterar PIN",
          icon: "key",
          color: "orange",
          description: "Atualização do PIN de acesso",
          route: "/security/pin"
        },
        {
          title: "Sessões ativas",
          icon: "smartphone",
          color: "purple",
          description: "Dispositivos com sessão iniciada",
          route: "/security/sessions"
        }
      ]
    },

    {
      categoryName: "Outros",
      items: [
        {
          title: "Aparência",
          icon: "sun",
          color: "yellow",
          description: "Configuração do tema do aplicativo",
          route: "/settings/theme"
        },
        {
          title: "Notificações",
          icon: "bell",
          color: "orange",
          description: "Alertas de consumo e pagamentos",
          route: "/settings/notifications"
        },
        {
          title: "Ajuda e suporte",
          icon: "help-circle",
          color: "blue",
          description: "Suporte técnico e perguntas frequentes",
          route: "/support/help"
        },
        {
          title: "Sobre",
          icon: "info",
          color: "gray",
          description: "Informações legais e versão do app",
          route: "/settings/about"
        }
      ]
    }
  ]
}
