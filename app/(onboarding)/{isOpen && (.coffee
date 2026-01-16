{isOpen && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            {/* <TouchableWithoutFeedback onPress={closeModal}>
              <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback> */}

            {/* <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Animated.View
                style={{
                  transform: [{ translateY }],
                  backgroundColor: "#fff",
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  padding: 24,
                  gap: 24,
                }}
              >
                <View
                  {...panResponder.panHandlers}
                  className="w-full items-center pb-2"
                >
                  <View className="w-20 h-1 bg-gray-400 rounded-full" />
                </View>

                <View className="flex-row items-center gap-3">
                  <View className="bg-primary p-2.5 rounded-lg">
                    <Feather name="file-text" size={25} color="#fff" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-xl font-bold">Verificar Contrato</Text>
                    <Text className="text-gray-600 -mt-1">
                      Insira o número do seu contrato ENDE.
                    </Text>
                  </View>
                </View>

                <View className="gap-4">
                  <View className="gap-1.5">
                    <Text className="font-bold">Número de contrato</Text>
                    <TextInput
                      className="bg-gray-100 rounded-md h-11 px-3"
                      placeholder="Ex: 224144253363"
                      keyboardType="numeric"
                      value={numberContract}
                      onChangeText={setNumberContract}
                    />
                  </View>

                  <Button onPress={handleVerify} disabled={isDisabled} title="Verificar" />

                  <Link
                    href="/(onboarding)/info-create-account"
                    className="text-right text-primary font-medium"
                  >
                    Criar um contrato ENDE
                  </Link>
                </View>

                <View className="w-full h-28" />
              </Animated.View>
            </KeyboardAvoidingView> */}
          </View>
        )}